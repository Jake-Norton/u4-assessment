const chosenItems = [];
let id = 0;

module.exports = {
    getChosenItem: (req, res) => {
        res.status(200).send(chosenItems);
    },
    chooseItem: (req, res) => {
        const {item} = req.body;

        item.id = id;
        id++;

        chosenItems.push(item);
        res.status(200).send(chosenItems);
    },
    cancelItem: (req, res) => {
        const {id} = req.params;

        const index = chosenItems.findIndex(element => element.id === +id);
        chosenItems.splice(index, 1);
        res.status(200).send(chosenItems);
    }
}