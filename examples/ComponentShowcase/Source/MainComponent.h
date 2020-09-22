#pragma once

#include <JuceHeader.h>

//==============================================================================
class MainComponent  : public juce::Component
{
public:
    //==============================================================================
    MainComponent();
    ~MainComponent() override;

    //==============================================================================
    void resized() override;

private:
    blueprint::ReactApplicationRoot appRoot;

    //==============================================================================


    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (MainComponent)
};
