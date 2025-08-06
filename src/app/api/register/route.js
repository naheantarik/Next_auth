import bcrypt from "bcrypt";

let users = []; // user array

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const existingUser = users.find((user) => user.email === email); // existing user check
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
      });
    }
  } catch (error) {}
}
