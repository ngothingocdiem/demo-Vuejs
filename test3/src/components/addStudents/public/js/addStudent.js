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
            this.addStudent(this.name,this.age,this.sex,this.address,this.classs,this.score);
        }
    },
    computed: {
        checkSex(){
            if(this.check === 'Nam') this.sex = 1;
            else if(this.check === 'Nu') this.sex = 0;
        }
    }
}