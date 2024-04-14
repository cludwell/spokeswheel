✅ Get Prisma installed
✅Try using Next font imports from google
✅ Splash page

✅ Daisy UI is installed and working
✅ Got themes working as expected
✅ Figured out Next.js 14 routing system
✅ Got started on the router
✅ Got google fonts working as expected
✅ Got general header laid out
✅ Layout is now working with content between header and footer
✅ Debugged modals working with Next.js
-SSR creates different behavior of mounting unmounting createPortals, meaning animations were not firing
✅ Setting up Prisma
✅ Seeding the database
What was the problem? Why weren't the seedings working?
-Inconsistent pluralization of relationship assignments
-trying to connect before instances were created
Lesson: Leave assignment of connections until the end

🔲 Backend Routes
--✅User CRUD and forms C✅R✅U✅D✅
--✅Booking CRUD and forms C✅R✅U✅D✅
--🔲Conference CRUD and forms => would be for the admin, not a high priority
✅ Copy and paste Next/Auth functionality
✅ Tested and working
✅ Registration Form (Form only, not connected to state or db)
✅ Login Form
✅ Signup Form TESTED AND WORKING
✅ Create context to hold relevant data, user and user's bookings
✅ Deploy Zustand and have it accessible in context
✅ On successful login, have dispatch sent to store user and booking in store

✅Drop down menu
✅-update user info
✅-update booking
✅-delete booking
✅-create booking

✅ When user signs out, user is removed from state
secret page for admin to see all bookings

✅ Make error handling for frontend and backend if user password doesnt match database

🔲 Create $.25 test payment link for active Stripe
✅ Merge Stripe payments to main
✅ General testing
    -made sure that registration link is not in header if registered
    -drop down responsive to registration status
    -tested log in error handling redirect
✅ DOB working on user update
✅ Correct pricing on Registration and Reg Update
✅ On Reg Update, will want conditional send to Stripe if user has not paid yet
✅ Theres currently a problem updating state after a booking has been deleted
✅ Error handling is not happening on registration creation and backend fetch is being sent
🔲 We're ready for production!
✅ Copy payment links in Stripe to production mode
✅ Create a test payment link for .25 cents to make sure stripe is working in production
✅ Update redirection from Stripe to my app's url
✅ Remember to handle secret keys
🔲 Paid status is not being updated via the webhook, probably secret key related

npm run deploy
