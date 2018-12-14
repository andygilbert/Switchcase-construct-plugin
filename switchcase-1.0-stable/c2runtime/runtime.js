// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
cr.plugins_.wastrel_switchcase = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	/////////////////////////////////////
	var pluginProto = cr.plugins_.wastrel_switchcase.prototype;
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};

	var typeProto = pluginProto.Type.prototype;

	// called on startup for each object type
	typeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;
	};
	
	var instanceProto = pluginProto.Instance.prototype;

	// called whenever an instance is created
	instanceProto.onCreate = function()
	{
		this.switchVariable = null;
		this.caseBreak = false; //true if break is called; false if not
	};
	
	// only called if a layout object
	instanceProto.draw = function(ctx)
	{
	};

	//////////////////////////////////////
	// Conditions
	pluginProto.cnds = {};
	var cnds = pluginProto.cnds;

	cnds.Switch = function (switchVariable)
	{
		this.switchVariable = switchVariable;
		this.caseBreak = false;
		return true;
	};
	
	cnds.Case = function (caseValue)
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
	};

	cnds.CaseRange = function (startValue, endValue)
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
	};

	cnds.CaseContains = function (searchString)
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
	};

	cnds.CaseList = function (valueList)
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
	};

	cnds.CaseCompare = function (compareOperator, caseValue)
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
	};

	cnds.Default = function ()
	{
		if (!this.caseBreak) {
			return true;
		}
		else {
			return false;
		}		
	};

	//////////////////////////////////////
	// Actions
	pluginProto.acts = {};
	var acts = pluginProto.acts;

	acts.CaseBreak = function (myparam)
	{
		this.caseBreak = true;
	};
	//////////////////////////////////////
	// Expressions
	pluginProto.exps = {};
	var exps = pluginProto.exps;
	
}());