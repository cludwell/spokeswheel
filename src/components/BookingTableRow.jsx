export default function BookingTableRow({ booking }) {
  console.log(booking)
    return (

            <tr>
              <td>{booking.user.firstName ? booking.user.firstName : "null"} {" "} {booking.user.lastName ? booking.user.lastName : "null"}</td>
              <td>{booking.user.email ? booking.user.email : "null"}</td>
              <td>{booking.user.phoneNumber ? booking.user.phoneNumber : "null"}</td>
              <td>{booking?.paid ? "✅" : "❌"}</td>
              <td>{booking.user.dateOfBirth ? booking.user.dateOfBirth.slice(0,10) : "null"}</td>
            <td>'{booking?.createdAt.slice(2,16)}</td>
            <td>'{booking?.updatedAt.slice(2,16)}</td>
            </tr>


    )
}
