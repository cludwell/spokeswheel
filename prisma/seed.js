//this is the pattern for future versions of Prisma
// import { PrismaClient } from "@prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { Pool } from "pg";

// const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// const adapter = new PrismaPg(pool);
// const prisma = new PrismaClient({ adapter });


const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedUsers() {
  try {
    await prisma.users.create({
      data: {
        firstName: "Chris",
        lastName: "Ludwell",
        email: "cludwell@gmail.com",
        phoneNumber: "(510) 393-7938",
        hashedPassword:
          "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
        dateOfBirth: new Date(1987, 2, 28),
        bookings: {
          create: [
            {
              photoConsent: true,
              paid: true,
              paymentAmount: 123.48,
              emergencyName: "Kathleen Ludwell",
              emergencyNumber: "(123) 456-7890",
              emergencyRelation: "Mother",
              emailList: true,
              textUpdates: true,
              dietaryRestrictions: "Vegan",
              allergies: "N/A",
              notes: "Staff",
              lodging: "Lodges",
              conference: {
                connect: { id: 1 },
              },
            },
            {
              photoConsent: true,
              paid: true,
              paymentAmount: 164.64,
              emergencyName: "Kathleen Ludwell",
              emergencyNumber: "(123) 456-7890",
              emergencyRelation: "Mother",
              emailList: true,
              textUpdates: true,
              dietaryRestrictions: "Vegan",
              allergies: "N/A",
              notes: "Staff",
              lodging: "Cabins",
              conference: {
                connect: { id: 2 },
              },
            },
            {
              photoConsent: true,
              paid: true,
              paymentAmount: 220.0,
              emergencyName: "Kathleen Ludwell",
              emergencyNumber: "(123) 456-7890",
              emergencyRelation: "Mother",
              emailList: true,
              textUpdates: true,
              dietaryRestrictions: "Vegan",
              allergies: "N/A",
              notes: "Staff",
              lodging: "Lodges",
              conference: {
                connect: { id: 3 },
              },
            },
          ],
        },
      },
    });
  } catch (error) {
    console.error("User 1 seeding error: ", error);
  }
  // try {
  //   await prisma.users.create({
  //     data: {
  //       firstName: "Demo",
  //       lastName: "User",
  //       email: "demouser@gmail.com",
  //       hashedPassword:
  //         "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
  //       dateOfBirth: new Date(1986, 3, 1),
  //       bookings: {
  //         create: [
  //           {
  //             photoConsent: true,
  //             paid: false,
  //             emergencyName: "Papa Demo",
  //             emergencyNumber: "123-456-7890",
  //             emergencyRelation: "Father",
  //             emailList: true,
  //             textUpdates: true,
  //             dietaryRestrictions: "Omnivore",
  //             allergies: "N/A",
  //             notes: "Staff",
  //             lodging: "Lodges",
  //             conference: {
  //               connect: { id: 1 },
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });
  // } catch (error) {
  //   console.error("User 2 seeding error: ", error);
  // }
  // try {
  //   await prisma.users.create({
  //     data: {
  //       firstName: "Hank",
  //       lastName: "Hill",
  //       email: "propaneguy@gmail.com",
  //       hashedPassword:
  //         "$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C",
  //       dateOfBirth: new Date(1984, 3, 1),
  //       bookings: {
  //         create: [
  //           {
  //             photoConsent: true,
  //             paid: false,
  //             emergencyName: "Bobby",
  //             emergencyNumber: "098-765-4331",
  //             emergencyRelation: "Son",
  //             emailList: true,
  //             textUpdates: true,
  //             dietaryRestrictions: "Omnivore",
  //             allergies: "N/A",
  //             notes: "Staff",
  //             lodging: "Lodges",
  //             conference: {
  //               connect: { id: 1 },
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });
  // } catch (error) {
  //   console.error("User 3 seeding error: ", error);
  // }
}
async function seedConferences() {
  try {
    await prisma.conferences.create({
      data: {
        date: new Date(2024, 7, 15, 17),
        registrationCutoff: new Date(2024, 7, 12, 17),
        locationName: "Camp Seawood",
        locationLat: 43.043368704656324,
        locationLong: -70.78873188956963,
      },
    });
    await prisma.conferences.create({
      data: {
        date: new Date(2025, 7, 22, 17),
        registrationCutoff: new Date(2025, 7, 19, 17),
        locationName: "Camp Farnsworth",
        locationLat: 43.826012776791224,
        locationLong: -72.23845628850779,
      },
    });
    await prisma.conferences.create({
      data: {
        date: new Date(2026, 7, 14, 17),
        registrationCutoff: new Date(2026, 7, 13, 17),
        locationName: "Camp Seawood",
        locationLat: 43.043368704656324,
        locationLong: -70.78873188956963,
      },
    });
    const cons = await prisma.conferences.findMany();
    console.log("Seeded Conferences successfully");
  } catch (error) {
    console.error("Error during Conference seeding:", error);
    throw error;
  }
}

async function seedDatabase() {
  try {
    await seedConferences();
    await seedUsers();
    const users = await prisma.users.findMany();
    const bookings = await prisma.bookings.findMany();
    const conferences = await prisma.conferences.findMany();
    
    console.log("USERS =============================================", users)
    console.log("BOOKINGS ==========================================", bookings);
    console.log("CONFERENCES =======================================", conferences)
    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error during database seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
}
seedDatabase();

// 2025 Addition of Farnsworth conference
// async function seedConferences() {
//   try {

//     await prisma.conferences.create({
//       data: {
//         date: new Date(2025, 7, 22, 17),
//         registrationCutoff: new Date(2025, 7, 19, 17),
//         locationName: "Camp Farnsworth",
//         locationLat: 43.826012776791224,
//         locationLong: -72.23845628850779
//       },
//     });
//     const cons = await prisma.conferences.findMany();
//     console.log("Seeded 2025 Conference successfully", cons);
//   } catch (error) {
//     console.error("Error during 2025 Conference seeding:", error);
//   }
// }
// async function seedDatabase() {
//   try {
//     await seedConferences();
//     await seedUsers();
//     console.log("2025 Database seeding completed successfully");
//   } catch (error) {
//     console.error("Error during 2025 database seeding:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }
// seedDatabase();
