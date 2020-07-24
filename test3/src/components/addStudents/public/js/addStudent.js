import { mapActions } from 'vuex';
export default {
    name: 'addStudent',
    data() {
        return {  
            name: '123',
            age: '123',
            sex: 1,
            address: '123',
            classs:'123',
            score:1
        }
    },
    methods: {
        ...mapActions(['addStudent']),
        submit(e) {
            e.preventDefault();
            this.addStudent(this.name,this.age,this.sex,this.address,this.classs,this.score);
        }
    },
}