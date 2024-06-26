
Generic single-database configuration.

    When you execute this command, it will open an interactive PostgreSQL terminal (psql) connected to the specified database. You can then run SQL commands and queries directly against the PostgreSQL database, just like you would in any SQL client or interface.

psql -h localhost -U postgres -d postgres

    Make sure PostgreSQL is running: Check if the PostgreSQL server is running on your machine. You can do this by running the following command in your terminal:

sudo service postgresql status

    If the service is not running, start it using:

sudo service postgresql start

sudo service postgresql stop

Prisma commands
    npx prisma migrate reset
    npx prisma generate
    npx prisma db push
    npm run seed


git ls-files | xargs wc -l

INSTALLING STRIPE CLI

curl -L https://github.com/stripe/stripe-cli/releases/download/v1.14.0/stripe_1.14.0_linux_x86_64.tar.gz > stripe.tar.gz

After unarchiving it
tar -xvf stripe.tar.gz

Remove unused archive
rm -f stripe.tar.gz

Done ✅ Your stripe-cli is ready, try to check
./stripe --help

./stripe listen --forward-to localhost:3000/api/webhook

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
