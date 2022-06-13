import type { NextPage } from "next";
import Add from "@/basics/tsStart/";
import UnionAdd from "@/basics/unionTypes";
import LiteralAdd from "@/basics/literalTypes";
import FuncTypes from "@/basics/functionTypes";
import NeverType from "@/basics/neverType";
import FirstClass from "@/classes/first-class";
import GetterSetter from "@/classes/gettersSetters";
import Statics from "@/classes/staticMethods-props";
import Singletons from "@/classes/singletons";
import FirstInterface from "@/interfaces/firstInterface";
import InterfaceInClass from "@/interfaces/interfacesInClasses";
import FunctionTypes from "@/interfaces/functionTypes";
import Optionals from "@/interfaces/optionalParamsProps";
import Intersection from "@/advancedTypes/intersection";
import TypeGuards from "@/advancedTypes/typeGuards";
import DiscriminatedUnions from "@/advancedTypes/discriminatedUnions";
import Typecasting from "@/typeCasting";

// note that the NeverType component throws an Error to showcase the "never" Type
const Home: NextPage = () => {
	return (
		<>
			<Add />
			<UnionAdd />
			<LiteralAdd />
			<FuncTypes />
			{/* <NeverType /> */}
			<FirstClass />
			<GetterSetter />
			<Statics />
			<Singletons />
			<FirstInterface />
			<InterfaceInClass />
			<FunctionTypes />
			<Optionals />
			<Intersection />
			<TypeGuards />
			<DiscriminatedUnions />
			<Typecasting />
		</>
	);
};

export default Home;
