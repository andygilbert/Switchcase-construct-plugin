"use strict";

{
	C3.Plugins.wastrel_switchcase.Cnds =
	{
		Switch(switchVariable)
        {
            this.switchVariable = switchVariable;
            this.caseBreak = false;
            return true;
        },

        Case(caseValue)
        {
            if (!this.caseBreak) {
                if (this.switchVariable == caseValue) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }		
        },

        CaseRange(startValue, endValue)
        {
            if (!this.caseBreak) {
                if (this.switchVariable >= startValue && this.switchVariable <= endValue) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }		
        },

        CaseContains(searchString)
        {
            if (!this.caseBreak) {
                if (this.switchVariable.indexOf(searchString) != -1) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }		
        },

        CaseList(valueList)
        {
            if (!this.caseBreak) {
                var listIndex = 0;
                var listArray = new Array();

                listArray = valueList.split(",");

                for (listIndex in listArray) {
                    if (this.switchVariable == listArray[listIndex]) {
                        return true;
                    }
                }
                return false;
            }
            else {
                return false;
            }
        },

        CaseCompare(compareOperator, caseValue)
        {
            if (!this.caseBreak) {
                switch(compareOperator) {
                    case 0: // =
                        if (this.switchVariable == caseValue) {
                            return true;
                        }
                        else {
                            return false;
                        }
                        break;
                    case 1: // !=
                        if (this.switchVariable != caseValue) {
                            return true;
                        }
                        else {
                            return false;
                        }
                        break;
                    case 2: // <
                        if (this.switchVariable < caseValue) {
                            return true;
                        }
                        else {
                            return false;
                        }
                        break;
                    case 3: // <=
                        if (this.switchVariable <= caseValue) {
                            return true;
                        }
                        else {
                            return false;
                        }
                        break;
                    case 4: // >
                        if (this.switchVariable > caseValue) {
                            return true;
                        }
                        else {
                            return false;
                        }
                        break;
                    case 5: // >=
                        if (this.switchVariable >= caseValue) {
                            return true;
                        }
                        else {
                            return false;
                        }
                        break;
                }
            }
            else {
                return false;
            }
        },

        Default()
        {
            if (!this.caseBreak) {
                return true;
            }
            else {
                return false;
            }		
        }

	};
}