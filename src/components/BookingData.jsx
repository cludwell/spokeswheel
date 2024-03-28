export default function BookingData({ booking }) {
  return (
    <div>
      {"{"}
      <div className="ml-6">user : {"{"}</div>
      <div className="ml-12">
        <span>id:</span>
        <span>{booking.user.id ? booking.user.id : "null"}</span>
      </div>
      <div className="ml-12">
        <span className="mx-4">firstName:</span>
        <span>
          &quot;{booking.user.firstName ? booking.user.firstName : "null"}&quot;
        </span>
      </div>
      <div className="ml-12">
        <span className="mx-4">lastName:</span>
        <span>
          &quot;{booking.user.lastName ? booking.user.lastName : "null"}&quot;
        </span>
      </div>
      <div className="ml-12">
        <span className="mx-4">email:</span>
        <span>
          &quot;{booking.user.email ? booking.user.email : "null"}&quot;
        </span>
      </div>
      <div className="ml-12">
        <span className="mx-4">dateOfBirth:</span>
        <span>
          {booking.user.dateOfBirth ? booking.user.dateOfBirth : "null"}
        </span>
      </div>
      <div className="ml-12">
        <span className="mx-4">createdAt:</span>
        <span>{booking.user.createdAt ? booking.user.createdAt : "null"}</span>
      </div>
      <div className="ml-12">
        <span className="mx-4">updatedAt:</span>
        <span>{booking.user.updatedAt ? booking.user.updatedAt : "null"}</span>
      </div>
      <div className="ml-12">{"}"}</div>


      <div className="ml-6 ">
        <span>id:</span>
        <span>{booking?.id},</span>
      </div>

      <div className="ml-6 ">
        <span>conferenceId:</span>
        <span>{booking?.conferenceId },</span>
      </div>
      <div className="ml-6 ">
        <span>photoConsent: </span>
        <span>{booking?.photoConsent ? "true" : "false"},</span>
      </div>
      <div className="ml-6 ">
        <span>paid: </span>
        <span>{booking?.paid ? "true" : "false"},</span>
      </div>
      <div className="ml-6 ">
        <span>paymentAmount: </span>
        <span>
          {booking?.paymentAmount != 0 ? booking.paymentAmount : "0"},
        </span>
      </div>
      <div className="ml-6 ">
        <span>paymentIntentId: </span>
        <span>
          {booking?.paymentIntentId ? booking.paymentIntentId : "null"} ,
        </span>
      </div>
      <div className="ml-6 ">
        <span>paymentMethodId: </span>
        <span>
          {booking?.paymentMethodId ? booking.paymentMethodId : "null"},
        </span>
      </div>
      <div className="ml-6 ">
        <span>paymentStatus: </span>
        <span>{booking?.paymentStatus ? booking.paymentStatus : "null"},</span>
      </div>
      <div className="ml-6 ">
        <span>emergencyName: </span>
        <span>
          &quot;{booking?.emergencyName ? booking.emergencyName : "null"}&quot;,
        </span>
      </div>
      <div className="ml-6 ">
        <span className="ml-6 ">emergencyNumber: </span>
        <span>
          &quot;{booking?.emergencyNumber ? booking.emergencyNumber : "null"}
          &quot;,
        </span>
      </div>
      <div className="ml-6 ">
        <span>emergencyRelation: </span>
        <span>
          {booking?.emergencyRelation ? booking.emergencyRelation : "null"},
        </span>
      </div>
      <div className="ml-6 ">
        <span>emailList: </span>
        <span>{booking?.emailList ? "true" : "false"},</span>
      </div>
      <div className="ml-6 ">
        <span>textUpdates: </span>
        <span>{booking?.textUpdates ? "true" : "false"},</span>
      </div>
      <div className="ml-6 ">
        <span>dietaryRestrictions: </span>
        <span>
          &quot;
          {booking?.dietaryRestrictions ? booking.dietaryRestrictions : "null"}
          &quot;,
        </span>
      </div>
      <div className="ml-6 ">
        <span>allergies: </span>
        <span>
          &quot;{booking?.allergies ? booking.allergies : "null"}&quot;,
        </span>
      </div>
      <div className="ml-6 ">
        <span>notes: </span>
        <span>&quot;{booking?.notes ? booking.notes : "null"}&quot;,</span>
      </div>
      <div className="ml-6 ">
        <span>specialAccomodations: </span>
        <span>
          &quot;
          {booking?.specialAccomodations
            ? booking.specialAccomodations
            : "null"}
          &quot; ,
        </span>
      </div>
      <div className="ml-6 ">
        <span>lodging: </span>
        <span>&quot;{booking?.lodging ? booking.lodging : "null"}&quot;,</span>
      </div>
      <div className="ml-6 ">
        <span>createdAt: </span>
        <span>{booking?.createdAt},</span>
      </div>
      <div className="ml-6 ">
        <span>updatedAt: </span>
        <span>{booking?.updatedAt}</span>
      </div>
      {"}"}
    </div>
  );
}
