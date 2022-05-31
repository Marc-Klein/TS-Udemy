import type { NextPage } from "next";
import Add from "@/basics/tsStart/";
import UnionAdd from "@/basics/unionTypes";
import LiteralAdd from "@/basics/literalTypes";
import FuncTypes from "@/basics/functionTypes";
import NeverType from "@/basics/neverType";

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
