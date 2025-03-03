# Studio Booking App

## Description
A Studio Booking App created using React.js where users can book a studio from studio list page, see booked studios in booking list page, search for studios based on location and radius.

## Live Link

[Studio Booking App](https://the-studio-book.vercel.app)

## Screenshots

### Home Page

![Project Screenshot](https://i.ibb.co/Xr2HWxFP/download.png)  
*A screenshot of the project home page.*

### Studio List Page

![Project Screenshot](https://i.ibb.co/kVGSjYYT/download.png)  
*A screenshot of the project studiolist page.*

### Booking List Page

![Project Screenshot](https://i.ibb.co/5hB7tWMg/download.png)  
*A screenshot of the project bookinglist page.*

---

## Dependencies

The project uses the following technologies and libraries:

- "axios": "^1.8.1",
- "geolib": "^3.3.4",
- "react": "^18.3.0",
- "react-dom": "^18.3.0",
- "react-helmet-async": "^2.0.5",
- "react-hook-form": "^7.54.2",
- "react-icons": "^5.5.0",
- "react-router-dom": "^7.2.0",
- "sweetalert2": "^11.17.2",
- "tailwindcss": "^4.0.9"

---

## Features

- **Studio Listings**: Users can browse available studios with details.
- **Booking System**: Users can book available slots for studios.
- **Search Studio**: Dynamic search with suggestion and debouncing. Show all studios when no search keyword is provided.
- **Search by radius**: Used geolib library to get distance from user location to studio location and filter data accordingly.
- **Reset**: Show all studios and set all input fields to default when user clicks reset button.
- **Calculate Available Slots**: Calculate time slots from open and close time of studios with 30 minutes time distance.
- **Check Available Time**: If one user selects one time slot another user can't select the same time slot.
- **Booking List**: Users can view their bookings in booking list page.
- **Responsive UI**: Fully mobile-friendly and optimized UI with Tailwind CSS.
- **Fast Performance**: Optimized for speed using React.js with loading and error handling

---

## Challenges and Solutions

### 1. **Filter studios by radius**

- **Challenge:** Geolib npm library was new to me and I faced some issues with calculating the distance and filter studio data.
- **Solution:** Used google and youtube to learn about geolib and also used chrome devtools to handle errors and implement the search feature.

### 2. **Calculating time slots**

- **Challenge:** Based on open and closing time of a studio I tried to calculate time slots with 30 minutes time distance.
- **Solution:** I got to after much research about a function toTimeString() which helped me get close to solving the issue and fully solved the feature using setMinute and getMinute methods.

### 3. **Reseting the inputs**

- **Challenge:** When user clicks reset button in studio list page the search input along with radius select option should set to default values but select option was not reseting.
- **Solution:** It was a simple error but I solved it by using defaultvalue with state and reseting the state when user clicks reset.

---

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```sh
git clone https://github.com/AskatAsh/Studio-booking-app.git
cd Studio-booking-app
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Run the Development Server

```sh
npm run dev
```

---

## Enhancements and Future Improvements

- **Add keyboard navigation** Implement keyboard navigation on suggested search keys.
- **Pagination** There are a lot of data in studio list page. So a basic pagination will make it more user friendly and improve performance as too much data will not be shown.
- **Improved Booking Management:** Allow users to cancel or modify bookings.
- **Notifications:** Implement email or push notifications for booking confirmations.
- **User Reviews & Ratings:** Enable users to leave reviews and ratings for studios.
- **SEO Optimization:** Improve searchability by enhancing metadata and indexing.

---

Thank you for using the Studio Booking App! 🚀