gdjs.Start_32GameCode = {};
gdjs.Start_32GameCode.GDBlock1Objects1= [];
gdjs.Start_32GameCode.GDBlock1Objects2= [];
gdjs.Start_32GameCode.GDBlock2Objects1= [];
gdjs.Start_32GameCode.GDBlock2Objects2= [];
gdjs.Start_32GameCode.GDBlock3Objects1= [];
gdjs.Start_32GameCode.GDBlock3Objects2= [];
gdjs.Start_32GameCode.GDBlock4Objects1= [];
gdjs.Start_32GameCode.GDBlock4Objects2= [];
gdjs.Start_32GameCode.GDBlock5Objects1= [];
gdjs.Start_32GameCode.GDBlock5Objects2= [];
gdjs.Start_32GameCode.GDBlock6Objects1= [];
gdjs.Start_32GameCode.GDBlock6Objects2= [];
gdjs.Start_32GameCode.GDBlock7Objects1= [];
gdjs.Start_32GameCode.GDBlock7Objects2= [];
gdjs.Start_32GameCode.GDtovar1Objects1= [];
gdjs.Start_32GameCode.GDtovar1Objects2= [];
gdjs.Start_32GameCode.GDtovar3Objects1= [];
gdjs.Start_32GameCode.GDtovar3Objects2= [];
gdjs.Start_32GameCode.GDtovar2Objects1= [];
gdjs.Start_32GameCode.GDtovar2Objects2= [];
gdjs.Start_32GameCode.GDtovar4Objects1= [];
gdjs.Start_32GameCode.GDtovar4Objects2= [];
gdjs.Start_32GameCode.GDtovar5Objects1= [];
gdjs.Start_32GameCode.GDtovar5Objects2= [];
gdjs.Start_32GameCode.GDtovar6Objects1= [];
gdjs.Start_32GameCode.GDtovar6Objects2= [];
gdjs.Start_32GameCode.GDtovar7Objects1= [];
gdjs.Start_32GameCode.GDtovar7Objects2= [];
gdjs.Start_32GameCode.GDtovar8Objects1= [];
gdjs.Start_32GameCode.GDtovar8Objects2= [];
gdjs.Start_32GameCode.GDtovar9Objects1= [];
gdjs.Start_32GameCode.GDtovar9Objects2= [];
gdjs.Start_32GameCode.GDtovar10Objects1= [];
gdjs.Start_32GameCode.GDtovar10Objects2= [];
gdjs.Start_32GameCode.GDtovar11Objects1= [];
gdjs.Start_32GameCode.GDtovar11Objects2= [];
gdjs.Start_32GameCode.GDtovar12Objects1= [];
gdjs.Start_32GameCode.GDtovar12Objects2= [];
gdjs.Start_32GameCode.GDtovar13Objects1= [];
gdjs.Start_32GameCode.GDtovar13Objects2= [];
gdjs.Start_32GameCode.GDtovar14Objects1= [];
gdjs.Start_32GameCode.GDtovar14Objects2= [];
gdjs.Start_32GameCode.GDtovar15Objects1= [];
gdjs.Start_32GameCode.GDtovar15Objects2= [];
gdjs.Start_32GameCode.GDNewSprite2Objects1= [];
gdjs.Start_32GameCode.GDNewSprite2Objects2= [];
gdjs.Start_32GameCode.GDtovar16Objects1= [];
gdjs.Start_32GameCode.GDtovar16Objects2= [];
gdjs.Start_32GameCode.GDNewSpriteObjects1= [];
gdjs.Start_32GameCode.GDNewSpriteObjects2= [];
gdjs.Start_32GameCode.GDButtonstarObjects1= [];
gdjs.Start_32GameCode.GDButtonstarObjects2= [];
gdjs.Start_32GameCode.GDButtonexitObjects1= [];
gdjs.Start_32GameCode.GDButtonexitObjects2= [];
gdjs.Start_32GameCode.GDStarObjects1= [];
gdjs.Start_32GameCode.GDStarObjects2= [];
gdjs.Start_32GameCode.GDExitObjects1= [];
gdjs.Start_32GameCode.GDExitObjects2= [];

gdjs.Start_32GameCode.conditionTrue_0 = {val:false};
gdjs.Start_32GameCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32GameCode.condition1IsTrue_0 = {val:false};
gdjs.Start_32GameCode.conditionTrue_1 = {val:false};
gdjs.Start_32GameCode.condition0IsTrue_1 = {val:false};
gdjs.Start_32GameCode.condition1IsTrue_1 = {val:false};


gdjs.Start_32GameCode.mapOfGDgdjs_46Start_9532GameCode_46GDStarObjects1Objects = Hashtable.newFrom({"Star": gdjs.Start_32GameCode.GDStarObjects1});
gdjs.Start_32GameCode.mapOfGDgdjs_46Start_9532GameCode_46GDButtonstarObjects1Objects = Hashtable.newFrom({"Buttonstar": gdjs.Start_32GameCode.GDButtonstarObjects1});
gdjs.Start_32GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.Start_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Start_32GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Panel", false);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(1000);
}}

}


};gdjs.Start_32GameCode.mapOfGDgdjs_46Start_9532GameCode_46GDButtonstarObjects1Objects = Hashtable.newFrom({"Buttonstar": gdjs.Start_32GameCode.GDButtonstarObjects1});
gdjs.Start_32GameCode.mapOfGDgdjs_46Start_9532GameCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.Start_32GameCode.GDExitObjects1});
gdjs.Start_32GameCode.mapOfGDgdjs_46Start_9532GameCode_46GDButtonexitObjects1Objects = Hashtable.newFrom({"Buttonexit": gdjs.Start_32GameCode.GDButtonexitObjects1});
gdjs.Start_32GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.Start_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Start_32GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.Start_32GameCode.mapOfGDgdjs_46Start_9532GameCode_46GDButtonexitObjects1Objects = Hashtable.newFrom({"Buttonexit": gdjs.Start_32GameCode.GDButtonexitObjects1});
gdjs.Start_32GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Start_32GameCode.GDNewSpriteObjects1);

gdjs.Start_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_32GameCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Start_32GameCode.GDNewSpriteObjects1[i].getOpacity() == 200 ) {
        gdjs.Start_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Start_32GameCode.GDNewSpriteObjects1[k] = gdjs.Start_32GameCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Start_32GameCode.GDNewSpriteObjects1.length = k;}if (gdjs.Start_32GameCode.condition0IsTrue_0.val) {
}

}


{


gdjs.Start_32GameCode.condition0IsTrue_0.val = false;
{
{gdjs.Start_32GameCode.conditionTrue_1 = gdjs.Start_32GameCode.condition0IsTrue_0;
gdjs.Start_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13465124);
}
}if (gdjs.Start_32GameCode.condition0IsTrue_0.val) {
gdjs.Start_32GameCode.GDStarObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Start_32GameCode.mapOfGDgdjs_46Start_9532GameCode_46GDStarObjects1Objects, 386, 230, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttonstar"), gdjs.Start_32GameCode.GDButtonstarObjects1);

gdjs.Start_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32GameCode.mapOfGDgdjs_46Start_9532GameCode_46GDButtonstarObjects1Objects, runtimeScene, true, false);
}if (gdjs.Start_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32GameCode.GDButtonstarObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.Start_32GameCode.GDStarObjects1);
{for(var i = 0, len = gdjs.Start_32GameCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDStarObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.Start_32GameCode.GDButtonstarObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDButtonstarObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Start_32GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttonstar"), gdjs.Start_32GameCode.GDButtonstarObjects1);

gdjs.Start_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32GameCode.mapOfGDgdjs_46Start_9532GameCode_46GDButtonstarObjects1Objects, runtimeScene, true, true);
}if (gdjs.Start_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32GameCode.GDButtonstarObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.Start_32GameCode.GDStarObjects1);
{for(var i = 0, len = gdjs.Start_32GameCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDStarObjects1[i].setColor("126;211;33");
}
}{for(var i = 0, len = gdjs.Start_32GameCode.GDButtonstarObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDButtonstarObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.Start_32GameCode.condition0IsTrue_0.val = false;
{
{gdjs.Start_32GameCode.conditionTrue_1 = gdjs.Start_32GameCode.condition0IsTrue_0;
gdjs.Start_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13468020);
}
}if (gdjs.Start_32GameCode.condition0IsTrue_0.val) {
gdjs.Start_32GameCode.GDExitObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Start_32GameCode.mapOfGDgdjs_46Start_9532GameCode_46GDExitObjects1Objects, 386, 283, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttonexit"), gdjs.Start_32GameCode.GDButtonexitObjects1);

gdjs.Start_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32GameCode.mapOfGDgdjs_46Start_9532GameCode_46GDButtonexitObjects1Objects, runtimeScene, true, false);
}if (gdjs.Start_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32GameCode.GDButtonexitObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Start_32GameCode.GDExitObjects1);
{for(var i = 0, len = gdjs.Start_32GameCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDExitObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.Start_32GameCode.GDButtonexitObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDButtonexitObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Start_32GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttonexit"), gdjs.Start_32GameCode.GDButtonexitObjects1);

gdjs.Start_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32GameCode.mapOfGDgdjs_46Start_9532GameCode_46GDButtonexitObjects1Objects, runtimeScene, true, true);
}if (gdjs.Start_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32GameCode.GDButtonexitObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Start_32GameCode.GDExitObjects1);
{for(var i = 0, len = gdjs.Start_32GameCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDExitObjects1[i].setColor("208;2;27");
}
}{for(var i = 0, len = gdjs.Start_32GameCode.GDButtonexitObjects1.length ;i < len;++i) {
    gdjs.Start_32GameCode.GDButtonexitObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.Start_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32GameCode.GDBlock1Objects1.length = 0;
gdjs.Start_32GameCode.GDBlock1Objects2.length = 0;
gdjs.Start_32GameCode.GDBlock2Objects1.length = 0;
gdjs.Start_32GameCode.GDBlock2Objects2.length = 0;
gdjs.Start_32GameCode.GDBlock3Objects1.length = 0;
gdjs.Start_32GameCode.GDBlock3Objects2.length = 0;
gdjs.Start_32GameCode.GDBlock4Objects1.length = 0;
gdjs.Start_32GameCode.GDBlock4Objects2.length = 0;
gdjs.Start_32GameCode.GDBlock5Objects1.length = 0;
gdjs.Start_32GameCode.GDBlock5Objects2.length = 0;
gdjs.Start_32GameCode.GDBlock6Objects1.length = 0;
gdjs.Start_32GameCode.GDBlock6Objects2.length = 0;
gdjs.Start_32GameCode.GDBlock7Objects1.length = 0;
gdjs.Start_32GameCode.GDBlock7Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar1Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar1Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar3Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar3Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar2Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar2Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar4Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar4Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar5Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar5Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar6Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar6Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar7Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar7Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar8Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar8Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar9Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar9Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar10Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar10Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar11Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar11Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar12Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar12Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar13Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar13Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar14Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar14Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar15Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar15Objects2.length = 0;
gdjs.Start_32GameCode.GDNewSprite2Objects1.length = 0;
gdjs.Start_32GameCode.GDNewSprite2Objects2.length = 0;
gdjs.Start_32GameCode.GDtovar16Objects1.length = 0;
gdjs.Start_32GameCode.GDtovar16Objects2.length = 0;
gdjs.Start_32GameCode.GDNewSpriteObjects1.length = 0;
gdjs.Start_32GameCode.GDNewSpriteObjects2.length = 0;
gdjs.Start_32GameCode.GDButtonstarObjects1.length = 0;
gdjs.Start_32GameCode.GDButtonstarObjects2.length = 0;
gdjs.Start_32GameCode.GDButtonexitObjects1.length = 0;
gdjs.Start_32GameCode.GDButtonexitObjects2.length = 0;
gdjs.Start_32GameCode.GDStarObjects1.length = 0;
gdjs.Start_32GameCode.GDStarObjects2.length = 0;
gdjs.Start_32GameCode.GDExitObjects1.length = 0;
gdjs.Start_32GameCode.GDExitObjects2.length = 0;

gdjs.Start_32GameCode.eventsList2(runtimeScene);
return;

}

gdjs['Start_32GameCode'] = gdjs.Start_32GameCode;
