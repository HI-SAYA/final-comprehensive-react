function ProfileItem({ profileInfo }) {
    return (
        <div className="profile-item-div">
            <h1>내 정보</h1>
            <input
                type="text"
                readOnly={true}
                value={ profileInfo.memberId }
            />
            <input
                type="text"
                readOnly={true}
                value={ profileInfo.memberName }
            />
            <input
                type="text"
                readOnly={true}
                value={ profileInfo.memberEmail }
            />
        </div>
    )

}

export default ProfileItem;