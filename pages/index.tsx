import type { NextPage } from "next";
import Add from "../src/organisms/tsStart/index";
import CombinedAdd from "../src/organisms/unionTypes";

const Home: NextPage = () => {
	return (
		<>
			<Add />
			<CombinedAdd />
		</>
	);
};

export default Home;
