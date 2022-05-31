import type { NextPage } from "next";
import Add from "@/organisms/tsStart/";
import UnionAdd from "@/organisms/unionTypes";
import LiteralAdd from "@/organisms/literalTypes";
import FuncTypes from "@/organisms/functionTypes";
import NeverType from "@/organisms/neverType";

const Home: NextPage = () => {
	return (
		<>
			<Add />
			<UnionAdd />
			<LiteralAdd />
			<FuncTypes />
			<NeverType />
		</>
	);
};

export default Home;
