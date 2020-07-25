import { mapActions } from 'vuex';
export default {
    name: 'editStudent',
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
        ...mapActions(['editStudent']),
        submit(e) {
            e.preventDefault();
            this.editStudent({id:this.$store.state.edit.id,name:this.name,age:this.age,sex:this.sex,address:this.address,classs:this.classs,score:this.score});
            console.log(e);
        }
    },
}