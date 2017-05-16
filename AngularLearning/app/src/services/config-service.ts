import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Headers, Http} from '@angular/http';

@Injectable()
export class ConfigService {
    private configFile: any[];

    constructor(private http:Http) {
        this.configFile = [];
        http.request("../../../config.json")
            .subscribe(function(response) {
                this.configFile = JSON.parse(response["_body"]);
            });
    }

    getApiUrl() {
        return this.configFile["WebApiUrl"];
    }
}