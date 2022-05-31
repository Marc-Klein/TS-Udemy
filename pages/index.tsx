import type { NextPage } from "next";
import Add from "@/tsStart/";
import UnionAdd from "@/unionTypes";
import LiteralAdd from "@/literalTypes";
import FuncTypes from "@/functionTypes";
import NeverType from "@/neverType";

// note that the NeverType comp throws an Error to showcase the "never" Type
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
