export function Avatar({
  userData: { profilePicture, firstName, lastName },
  className = "",
}) {
  const initials = firstName[0] + lastName[0];

  return (
    <div className="avatar">
      {profilePicture ? (
        <div className={`rounded-full ${className}`}>
          <img
            src={`${process.env.REACT_APP_PUBLIC_URL}/media/avatars/${profilePicture}.jpg`}
            alt="Profile Picture"
          />
        </div>
      ) : (
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full h-12 w-12">
            <span className="text-xl">{initials}</span>
          </div>
        </div>
      )}
    </div>
  );
}
