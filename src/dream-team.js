module.exports = function createDreamTeam(members) {
        if (!(members instanceof Array)) {
          return false;
        }
        let i = 0;
        let companyName = '';
        while (members.length > i) {
          if (typeof (members[i]) === 'string') {
            let member = members[i].trim().toUpperCase();
            companyName += `${member[0]}`
          }
          i++;
        }
      return companyName.split('').sort().join('');
}
