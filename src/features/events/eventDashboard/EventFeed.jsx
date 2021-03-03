import React from "react";
import { Feed, Header, Segment } from "semantic-ui-react";

export default function EventFeed() {
  // const dispatch = useDispatch();
  // const { feed } = useSelector((state) => state.profile);

  // useEffect(() => {
  //   getUserFeedRef().on("value", (snapshot) => {
  //     if (!snapshot.exists()) {
  //       return;
  //     }
  //     const feed = firebaseObjectToArray(snapshot.val()).reverse();
  //     dispatch(listenToFeed(feed));
  //   });
  //   return () => {
  //     getUserFeedRef().off();
  //   };
  // }, [dispatch]);

  const image = "/assets/user.png";
  const date = "3 days ago";
  const summary = "Diana joined an event";

  return (
    <>
      <Header attached color='teal' icon='newspaper' content='News feed' />
      <Segment attached='bottom'>
        <Feed>
          <Feed.Event image={image} data={date} summary={summary} />
          <Feed.Event image={image} data={date} summary={summary} />
          <Feed.Event image={image} data={date} summary={summary} />
          <Feed.Event image={image} data={date} summary={summary} />
        </Feed>
        {/* {feed.map((post) => {
          <EventFeedItem post={post} key={post.id} />;
        })} */}
      </Segment>
    </>
  );
}
