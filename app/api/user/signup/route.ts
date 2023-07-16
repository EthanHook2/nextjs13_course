import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/Database/dbConfig";
import User from "@/Database/models/userModel";
import bcryptjs from "bcryptjs";

// Connect to DB
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    // Console Log
    console.log(reqBody);

    // check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // hash password

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // save user to db
    const savedUser = await newUser.save();
    console.log(savedUser);

    // return user
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });

    // Catch any errors
  } catch (error: any) {
    // return error
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
