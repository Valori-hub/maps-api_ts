/// <reference types="@types/google.maps" />

import { User } from './user';
import { Company } from './company';
import { CustomMap } from './CustomMap';


const customMap = new CustomMap('map');
const company = new Company();
const user = new User();

customMap.addMarker(user);
customMap.addMarker(company);

