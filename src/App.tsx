import { Divider, Grid } from "@mui/material";
import { GoogleCalendar } from "./GoogleCalendar/GoogleCalendar";
import { TickTick } from "./TickTick/components/TickTick";
import { TickTickTokenProvider } from "./TickTick/context/TickTickTokenContext";

function App() {
  return (
    <TickTickTokenProvider>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TickTick />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs>
          <GoogleCalendar />
        </Grid>
      </Grid>
    </TickTickTokenProvider>
  );
}

export default App;
