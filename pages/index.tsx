import type { NextPage } from "next";
import Add from "@/organisms/tsStart/";
import UnionAdd from "@/organisms/unionTypes";
import LiteralAdd from "@/organisms/literalTypes";

const Home: NextPage = () => {
	return (
		<>
			<Add />
			<UnionAdd />
			<LiteralAdd />
		</>
	);
};

export default Home;
