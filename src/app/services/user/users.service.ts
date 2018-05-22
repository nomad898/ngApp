import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {

    constructor(private http: Http) { }

    getUsers() {
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
            .pipe(map(
                response => response.json()))
            .pipe(map(
                response => response.results))
            .pipe(map(
                users => {
                    return users.map(
                        u => {
                            return {
                                name: u.name.first + ' ' + u.name.last,
                                image: u.picture.large,
                                geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street,
                            }
                        }
                    )
                }
            ))
    }

    users = [
        { name: 'Name 1' },
        { name: 'Name 2' },
        { name: 'Name 3' },
        { name: 'Name 4' },
        { name: 'Name 5' },
    ]
}