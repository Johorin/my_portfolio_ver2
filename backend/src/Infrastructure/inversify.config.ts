import { Container } from "inversify";
import { TYPES } from "@/types/RepositoryInterface/types";
import UserRepositoryInterface from "@/Domain/RepositoryInterface/UserRepositoryInterface";
import UserRepository from "@/Infrastructure/Repository/UserRepository";

const myContainer = new Container();
myContainer.bind<UserRepositoryInterface>(TYPES.UserRepositoryInterface).to(UserRepository);

export { myContainer };