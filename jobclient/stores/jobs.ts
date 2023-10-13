import axios from 'axios';
import { defineStore } from "pinia"
export const usejobsStore = defineStore('jobs', {
    state: () => ({
        token: '',
        username: 'Mr.MH ',
        allJobs: [],
        Job: [],

    }),
    getters: {

    },
    actions: {
        async fetchdata() {
            if (!this.token) {
                throw new Error('No token available.');
            }
            try {
                const response  = axios.get('http://localhost:3000/JobsApi/jobs/', {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTI3ZjJkMWE4ZTBiMjA2YTgyOWRkZGYiLCJuYW1lIjoiTW9oYW1lZCIsImlhdCI6MTY5NzIxNDY0MywiZXhwIjoxNjk5ODA2NjQzfQ.7eACzD1FOT26sZzDFsx7lbR9YU4X_o6vAzWLhG9x1ps`,
                    },
                }).then((res) => {
                    this.allJobs =  res.data
                })
                console.log(this.allJobs)
            } catch (error) {
            }
        },
        async getSingleData(id :string) {
            if (!this.token) {
                throw new Error('No token available.');
            }
            try {
                const response  = axios.get(`http://localhost:3000/JobsApi/jobs/${id}`, {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTI3ZjJkMWE4ZTBiMjA2YTgyOWRkZGYiLCJuYW1lIjoiTW9oYW1lZCIsImlhdCI6MTY5NzIxNDY0MywiZXhwIjoxNjk5ODA2NjQzfQ.7eACzD1FOT26sZzDFsx7lbR9YU4X_o6vAzWLhG9x1ps`,
                    },
                }).then((res) => {
                    this.Job =  res.data
                })
                console.log(this.Job)
            } catch (error) {
            }
        },
        async delete(id : string){
            if (!this.token) {
                throw new Error('No token available.');
            }
            await axios.delete(`http://localhost:3000/JobsApi/jobs/${id}` ,{
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTI3ZjJkMWE4ZTBiMjA2YTgyOWRkZGYiLCJuYW1lIjoiTW9oYW1lZCIsImlhdCI6MTY5NzIxNDY0MywiZXhwIjoxNjk5ODA2NjQzfQ.7eACzD1FOT26sZzDFsx7lbR9YU4X_o6vAzWLhG9x1ps`,
                },
            })
            console.log('deleted')
            this.fetchdata();
        },
        async edit(id : string , body : object){
            if (!this.token) {
                throw new Error('No token available.');
            }
            await axios.patch(`http://localhost:3000/JobsApi/jobs/${id}`,body,{
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTI3ZjJkMWE4ZTBiMjA2YTgyOWRkZGYiLCJuYW1lIjoiTW9oYW1lZCIsImlhdCI6MTY5NzIxNDY0MywiZXhwIjoxNjk5ODA2NjQzfQ.7eACzD1FOT26sZzDFsx7lbR9YU4X_o6vAzWLhG9x1ps`,
                },
            })
            console.log('edited')
            this.fetchdata();
        }
    },
    persist: {
        storage: persistedState.localStorage,
    },
})