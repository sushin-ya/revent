import React, { useEffect, useState } from "react";
import { Button, Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventListItemPlaceholder from "./EventListItemPlaceholder";
import { useDispatch, useSelector } from "react-redux";
import EventFilters from "./EventFilters";
import { listenToEventsFromFirestore } from "../../../app/firestore/firestoreService";
import { fetchEvents, listenToEvents } from "../eventActions";
import useFirestoreCollection from "../../../app/hooks/useFirestoreCollection";
import EventFeed from "./EventFeed";

export default function EventDashboard() {
  const limit = 2;
  const dispatch = useDispatch();
  const { events, moreEvents } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);
  const { authenticated } = useSelector((state) => state.auth);
  const [lastDocSnapshot, setLastDocSnapshot] = useState(null);
  const [loadingInit, setLoadingInit] = useState(false);
  const [predicate, setPredicate] = useState(
    new Map([
      ["startDate", new Date()],
      ["filter", "all"],
    ])
  );

  function handleSetPredicate(key, value) {
    setPredicate(new Map(predicate.set(key, value)));
  }

  useEffect(() => {
    setLoadingInit(true);
    dispatch(fetchEvents(predicate, limit)).then((lastVisible) => {
      setLastDocSnapshot(lastVisible);
      setLoadingInit(false);
    });
  }, [dispatch, predicate]);

  function handleFetchNextEvents() {
    dispatch(fetchEvents(predicate, limit, lastDocSnapshot)).then(
      (lastVisible) => {
        setLastDocSnapshot(lastVisible);
      }
    );
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        {loadingInit && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} />
        <Button
          loading={loading}
          disabled={!moreEvents}
          onClick={handleFetchNextEvents}
          color='green'
          content='More...'
          floated='right'
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {authenticated && <EventFeed />}
        <EventFilters
          predicate={predicate}
          setPredicate={handleSetPredicate}
          loading={loading}
        />
      </Grid.Column>
    </Grid>
  );
}
