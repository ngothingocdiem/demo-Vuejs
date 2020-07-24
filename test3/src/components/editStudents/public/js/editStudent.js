import { mapActions } from 'vuex';
export default {
    name: 'addStudent',
    data() {
        return {  
            name: '',
            age: '',
            sex: '',
            address: '',
            classs:'',
            score: ''
        }
    },
    methods: {
        ...mapActions(['addStudent']),
        submit(e) {
            e.preventDefault();
            //this.addStudent({name:this.name,age:this.age,sex:this.sex,address:this.address,classs:this.classs,score:this.score});
            console.log(e);
        }
    },
}