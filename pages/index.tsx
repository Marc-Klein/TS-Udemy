import type { NextPage } from "next";
import Add from "@/organisms/tsStart/";
import UnionAdd from "@/organisms/unionTypes";
import LiteralAdd from "@/organisms/literalTypes";
import FuncTypes from "@/organisms/functionTypes";

const Home: NextPage = () => {
	return (
		<>
			<Add />
			<UnionAdd />
			<LiteralAdd />
			<FuncTypes />
		</>
	);
};

export default Home;
