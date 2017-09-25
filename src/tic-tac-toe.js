class TicTacToe {
    constructor() {
        this.matrix = [[null,null,null],
                       [null,null,null],
                       [null,null,null]];
        this.winner = null;
        this.Player = false;
        this.symbol = 'x';
        this.count = null;      
    }

    getCurrentPlayerSymbol() {       
        if (this.Player){
            if (this.symbol == 'x' ? this.symbol = 'o' : this.symbol = 'x');            
            this.Player = false;
        }    
        return this.symbol;       
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == null){
            this.matrix[rowIndex][columnIndex] = this.symbol; 
            this.Player = true;
            this.count++;             
        }

        if ((this.matrix[0][0] && this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][0] == this.matrix[0][2]) ||
            (this.matrix[1][0] && this.matrix[1][0] == this.matrix[1][1] && this.matrix[1][0] == this.matrix[1][2]) ||
            (this.matrix[2][0] && this.matrix[2][0] == this.matrix[2][1] && this.matrix[2][0] == this.matrix[2][2]) ||
            (this.matrix[0][0] && this.matrix[0][0] == this.matrix[1][0] && this.matrix[0][0] == this.matrix[2][0]) ||
            (this.matrix[0][1] && this.matrix[0][1] == this.matrix[1][1] && this.matrix[0][1] == this.matrix[2][1]) ||
            (this.matrix[0][2] && this.matrix[0][2] == this.matrix[1][2] && this.matrix[0][2] == this.matrix[2][2]) ||
            (this.matrix[0][0] && this.matrix[0][0] == this.matrix[1][1] && this.matrix[0][0] == this.matrix[2][2]) ||
            (this.matrix[0][2] && this.matrix[0][2] == this.matrix[1][1] && this.matrix[0][2] == this.matrix[2][0])) {
            this.winner = this.symbol;
        }    
        this.getCurrentPlayerSymbol();
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()){
            return true;
        } else {
            return false;
        }      
    }

    getWinner() {
       return this.winner;             
    }

    noMoreTurns() {
        if (this.count == 9){
            return true;
        } else {
            return false;
        }
    }

    isDraw() {
        if (this.noMoreTurns() && this.winner == null){
            return true;
        } else {
            return false;
        }        
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];               
    }
}

module.exports = TicTacToe;
