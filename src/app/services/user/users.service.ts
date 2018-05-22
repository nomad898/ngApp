import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {

    size = 8;

    constructor(private http: Http) { }

    getUsers() {
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb')
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

    setSize(size) {
        this.size = size;
    }

    getSize() {
        return this.size;
    }
    
    users = [
        { name: 'Name 1' },
        { name: 'Name 2' },
        { name: 'Name 3' },
        { name: 'Name 4' },
        { name: 'Name 5' },
    ]
}