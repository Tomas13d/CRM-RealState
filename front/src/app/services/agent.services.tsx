import axios from "axios";

export const getAllAgents = async () => {
  const response = await axios.get("http://localhost:3001/api/agents");
  const fetchedAgents = response.data;
  return fetchedAgents;
};
