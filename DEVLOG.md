
#2026
🔲 create a directory and pages for worship examples
🔲 update the payment process
🔲...on stripe
🔲...on spokeswheel
🔲 create a page for 2026 at seawood 
🔲 ...and use photos of first year at seawood
🔲 create a sidebar or drop down table as more content is added to the website

🔲 create ephemera as patches and totebags
🔲 create seed data for new year and push it to vercel



#2025
4/5/2025
Build commands are located at
```https://vercel.com/spokeswheel/spokeswheel/settings/build-and-deployment```

✅ corrected bug in which phone numbers were not being saved to the database
✅ Fixed dependency issues

I'm going to wipe the database so that 
4/1/2025
🔲Need to ensure that new conference is seeded
✅ will need to update the update registration page as well
--🔲 updated but will need to test


=================
🔲In the future might want to create a form for the admin so that new conferences can be created without losing the database
🔲worried about success message displaying correctly when redirected from stripe

3/30/2025
✅ Carousels have been fixed
--✅ Swippable/Draggable bug was fixed
✅ Page created for upcoming conference
✅ Update Stripe Payments and add items for children and adults
✅ Add payment links to registration form
✅ Update registration form
--✅ amenities
--✅ child or adult
--✅ prices
--✅ conditionally sends stripe link based on age

On reflection having a cart on stripe might be really annoying to program and debug, should probably keep system where each person registers for themselves just to deploy quickly.

Dropdown menu for different conferences
Create a page with info about our first conference
-image carousels
-interactive cards/media
-video
--host or compress video?
✅Create new page with tentative information about upcoming conference

Refactor registration page for 2025
-allow users to register multiple people at once

something 3d on the landing page?
Carousel is becoming a roadblock
-use Daisy component and learn how to build it someother time?

-three images in horizontal scroll bar
-clicking left and right slides image bar
-clicking image opens it in a modal to focus on it

-problem is responsiveness for mobile devices
-can use daisy component but all my pictures are portrait so it might look weird, especially on small media queries

-fastest solution is to use daisy
-can still try implementing focus modal
--use limits to height and width
shameless line so i can commit
another shameless line
#2024
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
✅ Tested and<<>> working
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

✅ Create $.25 test payment link for active Stripe
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
✅ We're ready for production!
✅ Copy payment links in Stripe to production mode
✅ Create a test payment link for .25 cents to make sure stripe is working in production
✅ Update redirection from Stripe to my app's url
✅ Remember to handle secret keys
✅ Paid status is not being updated via the webhook, probably secret key related
🔲 If user has paid they are unable to change lodging on registration update

this command will be used to update frontend without effecting database
npm run deploy

this command will be used to wipe database
npm install && npm run setup && npm run build
