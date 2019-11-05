import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Repos } from '../repos/repos';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  myUsers:User[];
  myRepos: Repos[];

  constructor(private http: HttpClient) { 

  }

  url= 'https://api.github.com/users/'; 
  accessToken = '?access_token=' + environment.APIKEY;

  getAcc(searchByUser:string){
    interface data {
      name:string,
      login:string,
      avatar_url:string,
      html_url:string,
      followers_url:string,
      following_url:string,
      repos_url:string
    }

    let promise = new Promise ((resolve, reject)=>{
      this.myUsers = [];
      this.http.get<data>(this.url+searchByUser+this.accessToken).toPromise().then(
        (result)=>{
          this.myUsers.push(result);
          resolve();
        }, (error)=>{
          reject();
        })
    })
    return promise;
  }

  getRepos(searchByUser:string){
    interface repoData{
      name:string,
      html_url:string,
      description:string,
      language:string
    }

    let promise =new Promise((resolve, reject)=>{
      this.myRepos = [];
      this.http.get<repoData>(this.url+searchByUser+"/repos"+this.accessToken).toPromise().then(
        (result)=>{
         this.myRepos.push(result);
         resolve();
        },
        (error)=>{
          reject();
        })
    })
    return promise;
  }
}



