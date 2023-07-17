import { PrismaClient } from "@prisma/client";
import getValues from "./extensions/getValues";

const prisma = new PrismaClient().$extends(getValues);

// A `main` function so that we can use async/await
async function main() {
  const allUsers = await prisma.user.getValues("name", {
    name: "Sabin",
  });
  console.log(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
