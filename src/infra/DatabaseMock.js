class DatabaseMock{
    constructor(){
        this.producs = [ 
            {
                "id":123,
                "name": "Smartphone Xiaomi note 9 pro",
                "price": 2022.00
            },
            {
                "id":456,
                "name": "Smartphone Xiaomi note 7",
                "price": 2105.00
            },
            {
                "id":789,
                "name": "Smartphone Xiaomi note 6",
                "price": 405.00
            }
        ]
    }

    getDatabase(){
        return this.producs;
    }
}

module.exports = DatabaseMock