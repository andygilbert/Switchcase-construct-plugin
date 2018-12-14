"use strict";

{
	C3.Plugins.wastrel_switchcase.Instance = class wastrel_switchcaseInstance extends C3.SDKInstanceBase
	{
		constructor(inst, properties)
		{
			super(inst);
			
            this.switchVariable = null; 
            this.caseBreak = false; //true if break is called; false if not
			
			if (properties)		// note properties may be null in some cases
			{
				
			}
		}
		
		Release()
		{
			super.Release();
		}
        
        OnCreate()
        {
            //this.switchVariable = null; 
            //this.caseBreak = false; //true if break is called; false if not
        }
		
		SaveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}
		
		LoadFromJson(o)
		{
			// load state for savegames
		}
	};
}