import { mapActions } from 'vuex';
export default {
    name: 'addStudent',
    data() {
        return {  
            name: '',
            age: '',
            sex: 2,
            address: '',
            classs:'',
            score: '',
            check: ''
        }
    },
    methods: {
        ...mapActions(['addStudent']),
        submit(e) {
            e.preventDefault();
            this.addStudent({name:this.name,age:this.age,sex:this.sex,address:this.address,classs:this.classs,score:this.score});
        }
    },
    computed: {
        checkSex(){
            if(this.check === 'Nam') this.sex = 1;
            else if(this.check === 'Nu') this.sex = 0;
        }
    }
}