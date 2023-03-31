import { createConsumer } from "actioncable";

const cable = createConsumer(
  process.env.NEXT_PUBLIC_ACTION_CABLE_URL || "ws://localhost:3000/cable"
);

export default cable;
