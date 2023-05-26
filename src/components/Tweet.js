import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Action";



function Tweet(props) {

  const {message,user, timestamp} = props.tweet
 const { name, image, handle } = user;
  return (
    <div className="tweet">
  {/*     <img
        src={image}
        className="profile"
        alt="profile"
      /> */}

      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User user={user}/>
          <Timestamp timestamp={timestamp}/>

         

         
        </div>

       <Message mes={message}/>

       <Action />

       
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
