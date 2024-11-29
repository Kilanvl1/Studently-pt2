import { ProfileForm } from "./profileForm";

export const Profile = () => {
  return (
    <div className="[&>*]:mb-6" id="profile-section">
      <h2 className="">Start the questionnaire to unlock your benefits!</h2>
      <ProfileForm />
    </div>
  );
};
