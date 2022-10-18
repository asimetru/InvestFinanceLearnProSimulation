gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDBlock1Objects1= [];
gdjs.Game_32OverCode.GDBlock1Objects2= [];
gdjs.Game_32OverCode.GDBlock2Objects1= [];
gdjs.Game_32OverCode.GDBlock2Objects2= [];
gdjs.Game_32OverCode.GDBlock3Objects1= [];
gdjs.Game_32OverCode.GDBlock3Objects2= [];
gdjs.Game_32OverCode.GDBlock4Objects1= [];
gdjs.Game_32OverCode.GDBlock4Objects2= [];
gdjs.Game_32OverCode.GDBlock5Objects1= [];
gdjs.Game_32OverCode.GDBlock5Objects2= [];
gdjs.Game_32OverCode.GDBlock6Objects1= [];
gdjs.Game_32OverCode.GDBlock6Objects2= [];
gdjs.Game_32OverCode.GDBlock7Objects1= [];
gdjs.Game_32OverCode.GDBlock7Objects2= [];
gdjs.Game_32OverCode.GDtovar1Objects1= [];
gdjs.Game_32OverCode.GDtovar1Objects2= [];
gdjs.Game_32OverCode.GDtovar3Objects1= [];
gdjs.Game_32OverCode.GDtovar3Objects2= [];
gdjs.Game_32OverCode.GDtovar2Objects1= [];
gdjs.Game_32OverCode.GDtovar2Objects2= [];
gdjs.Game_32OverCode.GDtovar4Objects1= [];
gdjs.Game_32OverCode.GDtovar4Objects2= [];
gdjs.Game_32OverCode.GDtovar5Objects1= [];
gdjs.Game_32OverCode.GDtovar5Objects2= [];
gdjs.Game_32OverCode.GDtovar6Objects1= [];
gdjs.Game_32OverCode.GDtovar6Objects2= [];
gdjs.Game_32OverCode.GDtovar7Objects1= [];
gdjs.Game_32OverCode.GDtovar7Objects2= [];
gdjs.Game_32OverCode.GDtovar8Objects1= [];
gdjs.Game_32OverCode.GDtovar8Objects2= [];
gdjs.Game_32OverCode.GDtovar9Objects1= [];
gdjs.Game_32OverCode.GDtovar9Objects2= [];
gdjs.Game_32OverCode.GDtovar10Objects1= [];
gdjs.Game_32OverCode.GDtovar10Objects2= [];
gdjs.Game_32OverCode.GDtovar11Objects1= [];
gdjs.Game_32OverCode.GDtovar11Objects2= [];
gdjs.Game_32OverCode.GDtovar12Objects1= [];
gdjs.Game_32OverCode.GDtovar12Objects2= [];
gdjs.Game_32OverCode.GDtovar13Objects1= [];
gdjs.Game_32OverCode.GDtovar13Objects2= [];
gdjs.Game_32OverCode.GDtovar14Objects1= [];
gdjs.Game_32OverCode.GDtovar14Objects2= [];
gdjs.Game_32OverCode.GDtovar15Objects1= [];
gdjs.Game_32OverCode.GDtovar15Objects2= [];
gdjs.Game_32OverCode.GDNewSprite2Objects1= [];
gdjs.Game_32OverCode.GDNewSprite2Objects2= [];
gdjs.Game_32OverCode.GDtovar16Objects1= [];
gdjs.Game_32OverCode.GDtovar16Objects2= [];
gdjs.Game_32OverCode.GDNewSpriteObjects1= [];
gdjs.Game_32OverCode.GDNewSpriteObjects2= [];
gdjs.Game_32OverCode.GDNewSprite3Objects1= [];
gdjs.Game_32OverCode.GDNewSprite3Objects2= [];
gdjs.Game_32OverCode.GDButtonstarObjects1= [];
gdjs.Game_32OverCode.GDButtonstarObjects2= [];
gdjs.Game_32OverCode.GDButtonexitObjects1= [];
gdjs.Game_32OverCode.GDButtonexitObjects2= [];
gdjs.Game_32OverCode.GDStarObjects1= [];
gdjs.Game_32OverCode.GDStarObjects2= [];
gdjs.Game_32OverCode.GDExitObjects1= [];
gdjs.Game_32OverCode.GDExitObjects2= [];
gdjs.Game_32OverCode.GDGameOVERObjects1= [];
gdjs.Game_32OverCode.GDGameOVERObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32OverCode.conditionTrue_1 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_1 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDStarObjects1Objects = Hashtable.newFrom({"Star": gdjs.Game_32OverCode.GDStarObjects1});
gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDButtonstarObjects1Objects = Hashtable.newFrom({"Buttonstar": gdjs.Game_32OverCode.GDButtonstarObjects1});
gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Game", false);
}}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDButtonstarObjects1Objects = Hashtable.newFrom({"Buttonstar": gdjs.Game_32OverCode.GDButtonstarObjects1});
gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.Game_32OverCode.GDExitObjects1});
gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDButtonexitObjects1Objects = Hashtable.newFrom({"Buttonexit": gdjs.Game_32OverCode.GDButtonexitObjects1});
gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDButtonexitObjects1Objects = Hashtable.newFrom({"Buttonexit": gdjs.Game_32OverCode.GDButtonexitObjects1});
gdjs.Game_32OverCode.eventsList2 = function(runtimeScene) {

{


{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), false);
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(20).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(50);
}{runtimeScene.getGame().getVariables().getFromIndex(22).setNumber(50);
}{runtimeScene.getGame().getVariables().getFromIndex(23).setNumber(50);
}{runtimeScene.getGame().getVariables().getFromIndex(24).setNumber(50);
}{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(50);
}{runtimeScene.getGame().getVariables().getFromIndex(26).setNumber(50);
}{runtimeScene.getGame().getVariables().getFromIndex(27).setNumber(50);
}{runtimeScene.getGame().getVariables().getFromIndex(28).setNumber(50);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(11), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Game_32OverCode.GDNewSpriteObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32OverCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDNewSpriteObjects1[i].getOpacity() == 200 ) {
        gdjs.Game_32OverCode.condition0IsTrue_0.val = true;
        gdjs.Game_32OverCode.GDNewSpriteObjects1[k] = gdjs.Game_32OverCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDNewSpriteObjects1.length = k;}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition0IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13452220);
}
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.Game_32OverCode.GDStarObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDStarObjects1Objects, 360, 230, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttonstar"), gdjs.Game_32OverCode.GDButtonstarObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDButtonstarObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDButtonstarObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.Game_32OverCode.GDStarObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDStarObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDButtonstarObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDButtonstarObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttonstar"), gdjs.Game_32OverCode.GDButtonstarObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDButtonstarObjects1Objects, runtimeScene, true, true);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDButtonstarObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.Game_32OverCode.GDStarObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDStarObjects1[i].setColor("126;211;33");
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDButtonstarObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDButtonstarObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition0IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13454860);
}
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.Game_32OverCode.GDExitObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExitObjects1Objects, 386, 283, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttonexit"), gdjs.Game_32OverCode.GDButtonexitObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDButtonexitObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDButtonexitObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Game_32OverCode.GDExitObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDExitObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDButtonexitObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDButtonexitObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttonexit"), gdjs.Game_32OverCode.GDButtonexitObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDButtonexitObjects1Objects, runtimeScene, true, true);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDButtonexitObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Game_32OverCode.GDExitObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDExitObjects1[i].setColor("208;2;27");
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDButtonexitObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDButtonexitObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDBlock1Objects1.length = 0;
gdjs.Game_32OverCode.GDBlock1Objects2.length = 0;
gdjs.Game_32OverCode.GDBlock2Objects1.length = 0;
gdjs.Game_32OverCode.GDBlock2Objects2.length = 0;
gdjs.Game_32OverCode.GDBlock3Objects1.length = 0;
gdjs.Game_32OverCode.GDBlock3Objects2.length = 0;
gdjs.Game_32OverCode.GDBlock4Objects1.length = 0;
gdjs.Game_32OverCode.GDBlock4Objects2.length = 0;
gdjs.Game_32OverCode.GDBlock5Objects1.length = 0;
gdjs.Game_32OverCode.GDBlock5Objects2.length = 0;
gdjs.Game_32OverCode.GDBlock6Objects1.length = 0;
gdjs.Game_32OverCode.GDBlock6Objects2.length = 0;
gdjs.Game_32OverCode.GDBlock7Objects1.length = 0;
gdjs.Game_32OverCode.GDBlock7Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar1Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar1Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar3Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar3Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar2Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar2Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar4Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar4Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar5Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar5Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar6Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar6Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar7Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar7Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar8Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar8Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar9Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar9Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar10Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar10Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar11Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar11Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar12Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar12Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar13Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar13Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar14Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar14Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar15Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar15Objects2.length = 0;
gdjs.Game_32OverCode.GDNewSprite2Objects1.length = 0;
gdjs.Game_32OverCode.GDNewSprite2Objects2.length = 0;
gdjs.Game_32OverCode.GDtovar16Objects1.length = 0;
gdjs.Game_32OverCode.GDtovar16Objects2.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDNewSprite3Objects1.length = 0;
gdjs.Game_32OverCode.GDNewSprite3Objects2.length = 0;
gdjs.Game_32OverCode.GDButtonstarObjects1.length = 0;
gdjs.Game_32OverCode.GDButtonstarObjects2.length = 0;
gdjs.Game_32OverCode.GDButtonexitObjects1.length = 0;
gdjs.Game_32OverCode.GDButtonexitObjects2.length = 0;
gdjs.Game_32OverCode.GDStarObjects1.length = 0;
gdjs.Game_32OverCode.GDStarObjects2.length = 0;
gdjs.Game_32OverCode.GDExitObjects1.length = 0;
gdjs.Game_32OverCode.GDExitObjects2.length = 0;
gdjs.Game_32OverCode.GDGameOVERObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOVERObjects2.length = 0;

gdjs.Game_32OverCode.eventsList2(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
