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
  //   console.error("User 2 seeding error: ", error);
  // } finally {
  //   await prisma.$disconnect();
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
        locationLong: -72.23845628850779
      },
    });
    const cons = await prisma.conferences.findMany();
    console.log("Seeded Conferences successfully", cons);
  } catch (error) {
    console.error("Error during Conference seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedDatabase() {
  try {
    await seedConferences();
    await seedUsers();
    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error during database seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
}
seedDatabase();
