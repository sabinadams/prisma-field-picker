import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.user.deleteMany();
  await prisma.user.create({
    data: {
      name: "Alice",
    },
  });
  await prisma.user.create({
    data: {
      name: "Sabin",
    },
  });
  await prisma.user.create({
    data: {
      name: "Jim",
    },
  });
}

main().catch((e) => {
  console.log(e);
});
