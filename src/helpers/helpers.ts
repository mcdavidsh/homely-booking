// export const toAbsoluteUrl = (pathname: string) => process.env.PUBLIC_URL + pathname
import {main_url} from "../baseurl";

export const toAbsoluteUrl = (pathname: string) => main_url + pathname
//REACT PATH
