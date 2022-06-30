export default {
    formatCurrency: function (num) {
        return 'KSH' + Number(num.toFixed(1)).toLocaleString() + ' ';
    }
}